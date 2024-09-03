import { Injectable, Inject, HttpStatus, forwardRef } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './models/user.entity';
import { Op } from 'sequelize';
import { generatePassword, getHash } from 'src/auth/auth.utils';
import { UserRoles } from './enums/user-role.enum';
// import { OrganizationGroupService } from 'src/organization-group/organization-group.service';
// import { sendEmail } from 'src/utils/emailUtils';
// import { ExamService } from 'src/exams/exam.service';
import { CreateUserDemoDTO } from './dto/user-demo.dto';
// import { UserDemo } from './models/user-demo.entiti';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User, // @Inject('USER_DEMO_REPO') // private userDemoRepo: typeof UserDemo, // private readonly orgizationGroupService: OrganizationGroupService, // @Inject(forwardRef(() => ExamService)) // private readonly examService: ExamService,
  ) {}

  async findOne(username: string): Promise<any> {
    const result: any = await this.userRepository.findOne({
      where: { [Op.or]: { username: username, email: username } },
      attributes: [
        'firstName',
        'lastName',
        'id',
        'email',
        'username',
        'password',
        'isActive',
        'middleName',
        'role',
        // 'orgnizationId',
        // 'recruiter_id',
        // 'recruiter_name',
      ],
    });
    if (result) {
      let orgnizationDetail: any = null;
      if (result && result.orgnizationId) {
        // orgnizationDetail = await this.orgizationGroupService.getOrgById(
        //   result.orgnizationId,
        // );
      }

      const findlResult: any = {
        ...result.toJSON(),
        organization: orgnizationDetail
          ? { ...orgnizationDetail.toJSON() }
          : null,
      };

      return findlResult;
    } else {
      throw {
        success: false,
        message: 'User not found',
        status: HttpStatus.BAD_REQUEST,
      };
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll({
      attributes: {
        exclude: [
          'password',
          'resetPasswordKey',
          'resetPasswordDate',
          'createdAt',
          'updatedAt',
        ],
      },
    });
  }

  async getUserByOrgnizationId(organizationId: number) {
    const result = this.userRepository.findAll({
      where: {
        orgnizationId: organizationId,
        role: UserRoles.USER,
      },
      attributes: {
        exclude: [
          'password',
          'resetPasswordKey',
          'resetPasswordDate',
          'createdAt',
          'updatedAt',
        ],
      },
    });

    return result;
  }

  async getBasicUserByID(id: number) {
    return await this.userRepository.findByPk(id, {
      attributes: [
        'email',
        'firstName',
        'middleName',
        'lastName',
        'userName',
        'birthDate',
        'contact',
        'contact_country_code',
      ],
    });
  }

  async CandidateByOrgID(orgnizationId: number) {
    const result: any = await this.userRepository.findAll({
      where: {
        orgnizationId: orgnizationId,
        role: UserRoles.CANDIDATE,
      },
      attributes: {
        exclude: [
          'password',
          'resetPasswordKey',
          'resetPasswordDate',
          'createdAt',
          'updatedAt',
        ],
      },
    });
    const userDetails = [];

    //TODO right a optimized code
    for (let i = 0; i < result.length; i++) {
      // const exam: any = await this.examService.getCandidateExamByCandidateId(
      //   result[i].id,
      // );
      // const obj: any = { ...result[i].dataValues, exam };
      // userDetails.push(obj);
    }
    return userDetails;
  }

  async getCandidateByRecruiterId(recruiterId: number) {
    const result: any = await this.userRepository.findAll({
      where: {
        recruiter_id: recruiterId,
        role: UserRoles.CANDIDATE,
      },
      attributes: {
        exclude: [
          'password',
          'resetPasswordKey',
          'resetPasswordDate',
          'createdAt',
          'updatedAt',
        ],
      },
    });

    const userDetails = [];

    //TODO right a optimized code
    for (let i = 0; i < result.length; i++) {
      // const exam: any = await this.examService.getCandidateExamByCandidateId(
      //   result[i].id,
      // );
      // const obj: any = { ...result[i].dataValues, exam };
      // userDetails.push(obj);
    }
    return userDetails;
  }

  async createUser(body: CreateUserDTO, invitationURL: string = null) {
    const result = await this.userRepository.findAll({
      where: {
        [Op.or]: { username: body.username, email: body.email.toLowerCase() },
      },
    });

    if (result && result.length > 0) {
      throw {
        success: false,
        message: 'Username or emailId already exist',
        status: HttpStatus.BAD_REQUEST,
      };
    }

    if (
      !body &&
      (body.role === UserRoles.ADMIN ||
        body.role === UserRoles.CANDIDATE ||
        body.role === UserRoles.USER)
    ) {
      throw {
        success: false,
        message: 'Missing Orgnization id',
        status: HttpStatus.BAD_REQUEST,
      };
    }

    let recruiter = null;
    if (body.role === UserRoles.CANDIDATE) {
      if (!body.recruiter_id) {
        throw {
          success: false,
          message: 'Recuiter id should not be null',
          status: HttpStatus.BAD_REQUEST,
        };
      } else {
        recruiter = await this.userRepository.findByPk(body.recruiter_id, {
          attributes: ['firstName', 'lastName'],
        });
      }
    }

    if (body) {
      // const result = await this.orgizationGroupService.getOrgById(
      //   body.orgnizationId,
      // );

      if (!result) {
        throw {
          success: false,
          message: 'Orgnization does not exist or its not active',
          status: HttpStatus.BAD_REQUEST,
        };
      }
    }

    const user: any = {
      ...body,
      email: body.email.toLowerCase(),
    };

    if (body.recruiter_id && body.role === UserRoles.CANDIDATE && recruiter) {
      user['recruiter_name'] = recruiter.firstName + ' ' + recruiter.lastName;
    }
    if (!body.username) {
      user.username = body.email;
    }

    const pass = generatePassword(8);
    user['password'] = getHash(pass);

    // sendEmail({
    //   from: 'noreplybravenstool@gmail.com',
    //   to: body.email,
    //   subject: 'Welcome In Bravens tools',
    //   altText: 'Email content',
    //   // html: `<h6> Welcome to Bravens Tool,  <br/>  Your username is <strong>${user.username} </strong>  <br/>  password is  ${pass}</h6>`,
    //   html: `<!DOCTYPE html>
    //   <html>
    //   <head>
    //   </head>
    //   <body>
    //   <h6>Hi ${body.firstName} ${body.lastName}</h6>
    //   <div>Welcome To Bravens Tools,</div>
    //   <div>Your username is :  <b>${user.username}</b></div>
    //   <div>Your password is :   <b> ${pass}</b></div>
    //   <br/>
    //   ${
    //     invitationURL
    //       ? `<br/><div>Please click on following link and start your exam </div>
    //       <p>Click Here to <a href="http://http://localhost:3000/sign-in/id=${invitationURL}">Start your test</a>.</p>
    //       `
    //       : ''
    //   }
    //   <div>Please connect with supprot team if you face any issues.</div>
    //   <br/>
    //   <br/>
    //   <div>Thanks</div>
    //   <div>Bravens Tool Admin</div>
    //   </body>
    //   </html>`,
    // });

    let createdUser: any = await this.userRepository.create(user);
    createdUser = createdUser.toJSON();
    delete createdUser['password'];
    return createdUser;
  }

  async updateUserDetails(body: any) {
    if (!body.id) {
      const err = {
        success: false,
        message: 'Missing Id',
        status: HttpStatus.BAD_REQUEST,
      };
      throw err;
    }

    const organizationBody: any = {
      ...body,
    };
    if (body.email) {
      organizationBody['email'] = body.email.toLowerCase();
    }
    await this.userRepository.update(organizationBody, {
      where: {
        id: body.id,
      },
      returning: true,
    });
    const updatedItems = await this.userRepository.findByPk(body.id);
    return updatedItems;
  }

  // async createDemoUser(body: any) {
  //   let createDemoUserDetails = await this.userDemoRepo.create(body);
  //   return createDemoUserDetails;
  // }
}

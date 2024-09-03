import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
// import { OrganizationGroup } from 'src/organization-group/models/organization-group-entity';
import { UserRoles } from '../enums/user-role.enum';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  middleName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(true)
  @Column
  contact: string;

  @AllowNull(true)
  @Column
  contact_country_code: string;

  @AllowNull(true)
  @Column
  profilePicture: string;

  @AllowNull(true)
  @Column({ defaultValue: null, type: DataType.STRING(3000) })
  address: string;

  @AllowNull(true)
  @Column
  birthDate: Date;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM(
      UserRoles.ADMIN,
      UserRoles.USER,
      UserRoles.CANDIDATE,
      UserRoles.BRAVEN_TOOL_ADMIN,
    ),
    defaultValue: UserRoles.USER,
  })
  role: string;

  @AllowNull(true)
  @Column
  resetPasswordKey: string;

  @AllowNull(true)
  @Column
  resetPasswordDate: Date;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;

  // @AllowNull(true)
  // @ForeignKey(() => OrganizationGroup)
  // @Column({ type: DataType.INTEGER })
  // orgnizationId: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
  })
  recruiter_id: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  recruiter_name: string;
}

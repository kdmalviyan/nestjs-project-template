export class CreateUserDto {
    readonly id: number;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly email?: string;
    readonly username: string;
    readonly password: string;
    readonly securityToken?: string;
}
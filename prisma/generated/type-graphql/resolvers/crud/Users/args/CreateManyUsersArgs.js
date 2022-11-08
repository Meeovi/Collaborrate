"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateManyInput_1 = require("../../../inputs/UsersCreateManyInput");
let CreateManyUsersArgs = class CreateManyUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersCreateManyInput_1.UsersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUsersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUsersArgs.prototype, "skipDuplicates", void 0);
CreateManyUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUsersArgs);
exports.CreateManyUsersArgs = CreateManyUsersArgs;

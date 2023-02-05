"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInUpdateInput_1 = require("../../../inputs/LogInUpdateInput");
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
let UpdateOneLogInArgs = class UpdateOneLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInUpdateInput_1.LogInUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInUpdateInput_1.LogInUpdateInput)
], UpdateOneLogInArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], UpdateOneLogInArgs.prototype, "where", void 0);
UpdateOneLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLogInArgs);
exports.UpdateOneLogInArgs = UpdateOneLogInArgs;

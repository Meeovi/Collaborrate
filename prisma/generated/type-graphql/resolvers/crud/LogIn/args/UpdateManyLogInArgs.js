"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInUpdateManyMutationInput_1 = require("../../../inputs/LogInUpdateManyMutationInput");
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
let UpdateManyLogInArgs = class UpdateManyLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInUpdateManyMutationInput_1.LogInUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInUpdateManyMutationInput_1.LogInUpdateManyMutationInput)
], UpdateManyLogInArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], UpdateManyLogInArgs.prototype, "where", void 0);
UpdateManyLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLogInArgs);
exports.UpdateManyLogInArgs = UpdateManyLogInArgs;

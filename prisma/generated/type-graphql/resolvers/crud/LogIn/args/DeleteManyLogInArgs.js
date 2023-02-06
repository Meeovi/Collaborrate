"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
let DeleteManyLogInArgs = class DeleteManyLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], DeleteManyLogInArgs.prototype, "where", void 0);
DeleteManyLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLogInArgs);
exports.DeleteManyLogInArgs = DeleteManyLogInArgs;

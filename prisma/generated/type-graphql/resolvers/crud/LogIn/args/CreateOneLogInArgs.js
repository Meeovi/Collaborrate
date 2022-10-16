"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInCreateInput_1 = require("../../../inputs/LogInCreateInput");
let CreateOneLogInArgs = class CreateOneLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInCreateInput_1.LogInCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInCreateInput_1.LogInCreateInput)
], CreateOneLogInArgs.prototype, "data", void 0);
CreateOneLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLogInArgs);
exports.CreateOneLogInArgs = CreateOneLogInArgs;

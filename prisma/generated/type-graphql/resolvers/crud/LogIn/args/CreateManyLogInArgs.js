"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInCreateManyInput_1 = require("../../../inputs/LogInCreateManyInput");
let CreateManyLogInArgs = class CreateManyLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInCreateManyInput_1.LogInCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLogInArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLogInArgs.prototype, "skipDuplicates", void 0);
CreateManyLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLogInArgs);
exports.CreateManyLogInArgs = CreateManyLogInArgs;

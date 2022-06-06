"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateInput_1 = require("../../../inputs/EmailsCreateInput");
let CreateEmailsArgs = class CreateEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateInput_1.EmailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateInput_1.EmailsCreateInput)
], CreateEmailsArgs.prototype, "data", void 0);
CreateEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateEmailsArgs);
exports.CreateEmailsArgs = CreateEmailsArgs;

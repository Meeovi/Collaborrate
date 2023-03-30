"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateInput_1 = require("../../../inputs/EmailsCreateInput");
let CreateOneEmailsArgs = class CreateOneEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateInput_1.EmailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateInput_1.EmailsCreateInput)
], CreateOneEmailsArgs.prototype, "data", void 0);
CreateOneEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEmailsArgs);
exports.CreateOneEmailsArgs = CreateOneEmailsArgs;

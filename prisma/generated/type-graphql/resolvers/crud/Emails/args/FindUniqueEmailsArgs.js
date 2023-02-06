"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let FindUniqueEmailsArgs = class FindUniqueEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], FindUniqueEmailsArgs.prototype, "where", void 0);
FindUniqueEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmailsArgs);
exports.FindUniqueEmailsArgs = FindUniqueEmailsArgs;

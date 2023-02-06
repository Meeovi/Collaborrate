"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let FindUniqueEmailsOrThrowArgs = class FindUniqueEmailsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], FindUniqueEmailsOrThrowArgs.prototype, "where", void 0);
FindUniqueEmailsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmailsOrThrowArgs);
exports.FindUniqueEmailsOrThrowArgs = FindUniqueEmailsOrThrowArgs;

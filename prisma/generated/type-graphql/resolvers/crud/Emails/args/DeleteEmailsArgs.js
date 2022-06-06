"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let DeleteEmailsArgs = class DeleteEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], DeleteEmailsArgs.prototype, "where", void 0);
DeleteEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteEmailsArgs);
exports.DeleteEmailsArgs = DeleteEmailsArgs;

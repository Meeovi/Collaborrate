"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateInput_1 = require("../../../inputs/EmailsCreateInput");
const EmailsUpdateInput_1 = require("../../../inputs/EmailsUpdateInput");
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let UpsertEmailsArgs = class UpsertEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], UpsertEmailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateInput_1.EmailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateInput_1.EmailsCreateInput)
], UpsertEmailsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateInput_1.EmailsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateInput_1.EmailsUpdateInput)
], UpsertEmailsArgs.prototype, "update", void 0);
UpsertEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertEmailsArgs);
exports.UpsertEmailsArgs = UpsertEmailsArgs;

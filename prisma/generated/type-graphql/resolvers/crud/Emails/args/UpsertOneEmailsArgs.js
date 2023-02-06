"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateInput_1 = require("../../../inputs/EmailsCreateInput");
const EmailsUpdateInput_1 = require("../../../inputs/EmailsUpdateInput");
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let UpsertOneEmailsArgs = class UpsertOneEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], UpsertOneEmailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateInput_1.EmailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateInput_1.EmailsCreateInput)
], UpsertOneEmailsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateInput_1.EmailsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateInput_1.EmailsUpdateInput)
], UpsertOneEmailsArgs.prototype, "update", void 0);
UpsertOneEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEmailsArgs);
exports.UpsertOneEmailsArgs = UpsertOneEmailsArgs;

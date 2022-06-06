"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsOrderByWithRelationInput_1 = require("../../../inputs/EmailsOrderByWithRelationInput");
const EmailsWhereInput_1 = require("../../../inputs/EmailsWhereInput");
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
const EmailsScalarFieldEnum_1 = require("../../../../enums/EmailsScalarFieldEnum");
let CustomersEmailsArgs = class CustomersEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], CustomersEmailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsOrderByWithRelationInput_1.EmailsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersEmailsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], CustomersEmailsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersEmailsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersEmailsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsScalarFieldEnum_1.EmailsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersEmailsArgs.prototype, "distinct", void 0);
CustomersEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CustomersEmailsArgs);
exports.CustomersEmailsArgs = CustomersEmailsArgs;

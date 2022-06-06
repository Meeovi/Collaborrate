"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByWithRelationInput_1 = require("../../../inputs/Email_templatesOrderByWithRelationInput");
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
const Email_templatesScalarFieldEnum_1 = require("../../../../enums/Email_templatesScalarFieldEnum");
let FindFirstEmail_templatesArgs = class FindFirstEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], FindFirstEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesOrderByWithRelationInput_1.Email_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmail_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], FindFirstEmail_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmail_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEmail_templatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesScalarFieldEnum_1.Email_templatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEmail_templatesArgs.prototype, "distinct", void 0);
FindFirstEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEmail_templatesArgs);
exports.FindFirstEmail_templatesArgs = FindFirstEmail_templatesArgs;

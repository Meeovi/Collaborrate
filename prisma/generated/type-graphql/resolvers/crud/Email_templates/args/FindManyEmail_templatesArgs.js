"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByWithRelationInput_1 = require("../../../inputs/Email_templatesOrderByWithRelationInput");
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
const Email_templatesScalarFieldEnum_1 = require("../../../../enums/Email_templatesScalarFieldEnum");
let FindManyEmail_templatesArgs = class FindManyEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], FindManyEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesOrderByWithRelationInput_1.Email_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEmail_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], FindManyEmail_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEmail_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEmail_templatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesScalarFieldEnum_1.Email_templatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEmail_templatesArgs.prototype, "distinct", void 0);
FindManyEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEmail_templatesArgs);
exports.FindManyEmail_templatesArgs = FindManyEmail_templatesArgs;

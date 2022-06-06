"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesOrderByWithRelationInput_1 = require("../../../inputs/Project_templatesOrderByWithRelationInput");
const Project_templatesWhereInput_1 = require("../../../inputs/Project_templatesWhereInput");
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
const Project_templatesScalarFieldEnum_1 = require("../../../../enums/Project_templatesScalarFieldEnum");
let FindManyProject_templatesArgs = class FindManyProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereInput_1.Project_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereInput_1.Project_templatesWhereInput)
], FindManyProject_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesOrderByWithRelationInput_1.Project_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProject_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], FindManyProject_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProject_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProject_templatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesScalarFieldEnum_1.Project_templatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProject_templatesArgs.prototype, "distinct", void 0);
FindManyProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProject_templatesArgs);
exports.FindManyProject_templatesArgs = FindManyProject_templatesArgs;

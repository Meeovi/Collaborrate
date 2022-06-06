"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesOrderByWithRelationInput_1 = require("../../../inputs/Project_templatesOrderByWithRelationInput");
const Project_templatesWhereInput_1 = require("../../../inputs/Project_templatesWhereInput");
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let AggregateProject_templatesArgs = class AggregateProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereInput_1.Project_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereInput_1.Project_templatesWhereInput)
], AggregateProject_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesOrderByWithRelationInput_1.Project_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProject_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], AggregateProject_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProject_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProject_templatesArgs.prototype, "skip", void 0);
AggregateProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProject_templatesArgs);
exports.AggregateProject_templatesArgs = AggregateProject_templatesArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsOrderByWithRelationInput_1 = require("../../../inputs/LeadsOrderByWithRelationInput");
const LeadsWhereInput_1 = require("../../../inputs/LeadsWhereInput");
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
const LeadsScalarFieldEnum_1 = require("../../../../enums/LeadsScalarFieldEnum");
let FindFirstLeadsArgs = class FindFirstLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereInput_1.LeadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereInput_1.LeadsWhereInput)
], FindFirstLeadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsOrderByWithRelationInput_1.LeadsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLeadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], FindFirstLeadsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLeadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLeadsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsScalarFieldEnum_1.LeadsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLeadsArgs.prototype, "distinct", void 0);
FindFirstLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLeadsArgs);
exports.FindFirstLeadsArgs = FindFirstLeadsArgs;

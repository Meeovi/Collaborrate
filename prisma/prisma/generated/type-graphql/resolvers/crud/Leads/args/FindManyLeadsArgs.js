"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsOrderByWithRelationInput_1 = require("../../../inputs/LeadsOrderByWithRelationInput");
const LeadsWhereInput_1 = require("../../../inputs/LeadsWhereInput");
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
const LeadsScalarFieldEnum_1 = require("../../../../enums/LeadsScalarFieldEnum");
let FindManyLeadsArgs = class FindManyLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereInput_1.LeadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereInput_1.LeadsWhereInput)
], FindManyLeadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsOrderByWithRelationInput_1.LeadsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyLeadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], FindManyLeadsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyLeadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyLeadsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsScalarFieldEnum_1.LeadsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyLeadsArgs.prototype, "distinct", void 0);
FindManyLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyLeadsArgs);
exports.FindManyLeadsArgs = FindManyLeadsArgs;

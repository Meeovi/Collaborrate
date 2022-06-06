"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceOrderByWithRelationInput_1 = require("../../../inputs/SourceOrderByWithRelationInput");
const SourceWhereInput_1 = require("../../../inputs/SourceWhereInput");
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let AggregateSourceArgs = class AggregateSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereInput_1.SourceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereInput_1.SourceWhereInput)
], AggregateSourceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceOrderByWithRelationInput_1.SourceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSourceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], AggregateSourceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSourceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSourceArgs.prototype, "skip", void 0);
AggregateSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSourceArgs);
exports.AggregateSourceArgs = AggregateSourceArgs;

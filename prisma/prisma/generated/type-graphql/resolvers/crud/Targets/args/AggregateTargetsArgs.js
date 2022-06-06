"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsOrderByWithRelationInput_1 = require("../../../inputs/TargetsOrderByWithRelationInput");
const TargetsWhereInput_1 = require("../../../inputs/TargetsWhereInput");
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let AggregateTargetsArgs = class AggregateTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereInput_1.TargetsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereInput_1.TargetsWhereInput)
], AggregateTargetsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsOrderByWithRelationInput_1.TargetsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTargetsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], AggregateTargetsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTargetsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTargetsArgs.prototype, "skip", void 0);
AggregateTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTargetsArgs);
exports.AggregateTargetsArgs = AggregateTargetsArgs;

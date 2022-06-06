"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByWithRelationInput_1 = require("../../../inputs/OotoOrderByWithRelationInput");
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let AggregateOotoArgs = class AggregateOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], AggregateOotoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoOrderByWithRelationInput_1.OotoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateOotoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], AggregateOotoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOotoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOotoArgs.prototype, "skip", void 0);
AggregateOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateOotoArgs);
exports.AggregateOotoArgs = AggregateOotoArgs;

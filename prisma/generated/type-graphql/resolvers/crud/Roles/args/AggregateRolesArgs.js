"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesOrderByWithRelationInput_1 = require("../../../inputs/RolesOrderByWithRelationInput");
const RolesWhereInput_1 = require("../../../inputs/RolesWhereInput");
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let AggregateRolesArgs = class AggregateRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereInput_1.RolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereInput_1.RolesWhereInput)
], AggregateRolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesOrderByWithRelationInput_1.RolesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRolesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], AggregateRolesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRolesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRolesArgs.prototype, "skip", void 0);
AggregateRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRolesArgs);
exports.AggregateRolesArgs = AggregateRolesArgs;

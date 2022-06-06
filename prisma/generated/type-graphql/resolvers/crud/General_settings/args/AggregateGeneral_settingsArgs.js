"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByWithRelationInput_1 = require("../../../inputs/General_settingsOrderByWithRelationInput");
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let AggregateGeneral_settingsArgs = class AggregateGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], AggregateGeneral_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsOrderByWithRelationInput_1.General_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateGeneral_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], AggregateGeneral_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGeneral_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGeneral_settingsArgs.prototype, "skip", void 0);
AggregateGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateGeneral_settingsArgs);
exports.AggregateGeneral_settingsArgs = AggregateGeneral_settingsArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesOrderByWithAggregationInput_1 = require("../../../inputs/CitiesOrderByWithAggregationInput");
const CitiesScalarWhereWithAggregatesInput_1 = require("../../../inputs/CitiesScalarWhereWithAggregatesInput");
const CitiesWhereInput_1 = require("../../../inputs/CitiesWhereInput");
const CitiesScalarFieldEnum_1 = require("../../../../enums/CitiesScalarFieldEnum");
let GroupByCitiesArgs = class GroupByCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereInput_1.CitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereInput_1.CitiesWhereInput)
], GroupByCitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesOrderByWithAggregationInput_1.CitiesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesScalarFieldEnum_1.CitiesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCitiesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesScalarWhereWithAggregatesInput_1.CitiesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesScalarWhereWithAggregatesInput_1.CitiesScalarWhereWithAggregatesInput)
], GroupByCitiesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCitiesArgs.prototype, "skip", void 0);
GroupByCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCitiesArgs);
exports.GroupByCitiesArgs = GroupByCitiesArgs;

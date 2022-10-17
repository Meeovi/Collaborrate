"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Customer_groupOrderByWithRelationAndSearchRelevanceInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let AggregateCustomer_groupArgs = class AggregateCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], AggregateCustomer_groupArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByWithRelationAndSearchRelevanceInput_1.Customer_groupOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCustomer_groupArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], AggregateCustomer_groupArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomer_groupArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomer_groupArgs.prototype, "skip", void 0);
AggregateCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCustomer_groupArgs);
exports.AggregateCustomer_groupArgs = AggregateCustomer_groupArgs;

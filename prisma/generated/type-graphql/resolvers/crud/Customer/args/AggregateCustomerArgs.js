"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerOrderByWithRelationInput_1 = require("../../../inputs/CustomerOrderByWithRelationInput");
const CustomerWhereInput_1 = require("../../../inputs/CustomerWhereInput");
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
let AggregateCustomerArgs = class AggregateCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], AggregateCustomerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerOrderByWithRelationInput_1.CustomerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCustomerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], AggregateCustomerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomerArgs.prototype, "skip", void 0);
AggregateCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCustomerArgs);
exports.AggregateCustomerArgs = AggregateCustomerArgs;

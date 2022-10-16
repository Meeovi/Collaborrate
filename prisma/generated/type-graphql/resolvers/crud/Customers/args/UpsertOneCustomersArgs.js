"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateInput_1 = require("../../../inputs/CustomersCreateInput");
const CustomersUpdateInput_1 = require("../../../inputs/CustomersUpdateInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let UpsertOneCustomersArgs = class UpsertOneCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], UpsertOneCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateInput_1.CustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateInput_1.CustomersCreateInput)
], UpsertOneCustomersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateInput_1.CustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateInput_1.CustomersUpdateInput)
], UpsertOneCustomersArgs.prototype, "update", void 0);
UpsertOneCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCustomersArgs);
exports.UpsertOneCustomersArgs = UpsertOneCustomersArgs;

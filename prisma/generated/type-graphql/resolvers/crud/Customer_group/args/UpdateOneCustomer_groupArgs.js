"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupUpdateInput_1 = require("../../../inputs/Customer_groupUpdateInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let UpdateOneCustomer_groupArgs = class UpdateOneCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateInput_1.Customer_groupUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateInput_1.Customer_groupUpdateInput)
], UpdateOneCustomer_groupArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], UpdateOneCustomer_groupArgs.prototype, "where", void 0);
UpdateOneCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCustomer_groupArgs);
exports.UpdateOneCustomer_groupArgs = UpdateOneCustomer_groupArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateInput_1 = require("../../../inputs/CustomersUpdateInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let UpdateCustomersArgs = class UpdateCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateInput_1.CustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateInput_1.CustomersUpdateInput)
], UpdateCustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], UpdateCustomersArgs.prototype, "where", void 0);
UpdateCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCustomersArgs);
exports.UpdateCustomersArgs = UpdateCustomersArgs;

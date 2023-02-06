"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateManyMutationInput_1 = require("../../../inputs/CustomersUpdateManyMutationInput");
const CustomersWhereInput_1 = require("../../../inputs/CustomersWhereInput");
let UpdateManyCustomersArgs = class UpdateManyCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateManyMutationInput_1.CustomersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateManyMutationInput_1.CustomersUpdateManyMutationInput)
], UpdateManyCustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], UpdateManyCustomersArgs.prototype, "where", void 0);
UpdateManyCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCustomersArgs);
exports.UpdateManyCustomersArgs = UpdateManyCustomersArgs;

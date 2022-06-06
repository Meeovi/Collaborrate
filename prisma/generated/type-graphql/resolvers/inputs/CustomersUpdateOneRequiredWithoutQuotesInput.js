"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/CustomersCreateOrConnectWithoutQuotesInput");
const CustomersCreateWithoutQuotesInput_1 = require("../inputs/CustomersCreateWithoutQuotesInput");
const CustomersUpdateWithoutQuotesInput_1 = require("../inputs/CustomersUpdateWithoutQuotesInput");
const CustomersUpsertWithoutQuotesInput_1 = require("../inputs/CustomersUpsertWithoutQuotesInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutQuotesInput = class CustomersUpdateOneRequiredWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput)
], CustomersUpdateOneRequiredWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutQuotesInput_1.CustomersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutQuotesInput_1.CustomersCreateOrConnectWithoutQuotesInput)
], CustomersUpdateOneRequiredWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutQuotesInput_1.CustomersUpsertWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutQuotesInput_1.CustomersUpsertWithoutQuotesInput)
], CustomersUpdateOneRequiredWithoutQuotesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutQuotesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutQuotesInput_1.CustomersUpdateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutQuotesInput_1.CustomersUpdateWithoutQuotesInput)
], CustomersUpdateOneRequiredWithoutQuotesInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutQuotesInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutQuotesInput);
exports.CustomersUpdateOneRequiredWithoutQuotesInput = CustomersUpdateOneRequiredWithoutQuotesInput;

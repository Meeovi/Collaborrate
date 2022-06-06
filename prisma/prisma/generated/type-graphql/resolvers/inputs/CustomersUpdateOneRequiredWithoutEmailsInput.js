"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutEmailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutEmailsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutEmailsInput");
const CustomersCreateWithoutEmailsInput_1 = require("../inputs/CustomersCreateWithoutEmailsInput");
const CustomersUpdateWithoutEmailsInput_1 = require("../inputs/CustomersUpdateWithoutEmailsInput");
const CustomersUpsertWithoutEmailsInput_1 = require("../inputs/CustomersUpsertWithoutEmailsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutEmailsInput = class CustomersUpdateOneRequiredWithoutEmailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput)
], CustomersUpdateOneRequiredWithoutEmailsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutEmailsInput_1.CustomersCreateOrConnectWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutEmailsInput_1.CustomersCreateOrConnectWithoutEmailsInput)
], CustomersUpdateOneRequiredWithoutEmailsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutEmailsInput_1.CustomersUpsertWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutEmailsInput_1.CustomersUpsertWithoutEmailsInput)
], CustomersUpdateOneRequiredWithoutEmailsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutEmailsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutEmailsInput_1.CustomersUpdateWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutEmailsInput_1.CustomersUpdateWithoutEmailsInput)
], CustomersUpdateOneRequiredWithoutEmailsInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutEmailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutEmailsInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutEmailsInput);
exports.CustomersUpdateOneRequiredWithoutEmailsInput = CustomersUpdateOneRequiredWithoutEmailsInput;

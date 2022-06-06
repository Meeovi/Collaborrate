"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutReturnsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutReturnsInput");
const CustomersCreateWithoutReturnsInput_1 = require("../inputs/CustomersCreateWithoutReturnsInput");
const CustomersUpdateWithoutReturnsInput_1 = require("../inputs/CustomersUpdateWithoutReturnsInput");
const CustomersUpsertWithoutReturnsInput_1 = require("../inputs/CustomersUpsertWithoutReturnsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutReturnsInput = class CustomersUpdateOneRequiredWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput)
], CustomersUpdateOneRequiredWithoutReturnsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutReturnsInput_1.CustomersCreateOrConnectWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutReturnsInput_1.CustomersCreateOrConnectWithoutReturnsInput)
], CustomersUpdateOneRequiredWithoutReturnsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutReturnsInput_1.CustomersUpsertWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutReturnsInput_1.CustomersUpsertWithoutReturnsInput)
], CustomersUpdateOneRequiredWithoutReturnsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutReturnsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutReturnsInput_1.CustomersUpdateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutReturnsInput_1.CustomersUpdateWithoutReturnsInput)
], CustomersUpdateOneRequiredWithoutReturnsInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutReturnsInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutReturnsInput);
exports.CustomersUpdateOneRequiredWithoutReturnsInput = CustomersUpdateOneRequiredWithoutReturnsInput;

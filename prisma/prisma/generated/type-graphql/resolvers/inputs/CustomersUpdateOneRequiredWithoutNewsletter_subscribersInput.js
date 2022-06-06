"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput");
const CustomersCreateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateWithoutNewsletter_subscribersInput");
const CustomersUpdateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersUpdateWithoutNewsletter_subscribersInput");
const CustomersUpsertWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersUpsertWithoutNewsletter_subscribersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput = class CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput)
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1.CustomersCreateOrConnectWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1.CustomersCreateOrConnectWithoutNewsletter_subscribersInput)
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutNewsletter_subscribersInput_1.CustomersUpsertWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutNewsletter_subscribersInput_1.CustomersUpsertWithoutNewsletter_subscribersInput)
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutNewsletter_subscribersInput_1.CustomersUpdateWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutNewsletter_subscribersInput_1.CustomersUpdateWithoutNewsletter_subscribersInput)
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput);
exports.CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput = CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput;

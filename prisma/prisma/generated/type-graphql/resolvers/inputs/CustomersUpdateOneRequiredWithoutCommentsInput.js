"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCommentsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCommentsInput");
const CustomersCreateWithoutCommentsInput_1 = require("../inputs/CustomersCreateWithoutCommentsInput");
const CustomersUpdateWithoutCommentsInput_1 = require("../inputs/CustomersUpdateWithoutCommentsInput");
const CustomersUpsertWithoutCommentsInput_1 = require("../inputs/CustomersUpsertWithoutCommentsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutCommentsInput = class CustomersUpdateOneRequiredWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput)
], CustomersUpdateOneRequiredWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCommentsInput_1.CustomersCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCommentsInput_1.CustomersCreateOrConnectWithoutCommentsInput)
], CustomersUpdateOneRequiredWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutCommentsInput_1.CustomersUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutCommentsInput_1.CustomersUpsertWithoutCommentsInput)
], CustomersUpdateOneRequiredWithoutCommentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutCommentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCommentsInput_1.CustomersUpdateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCommentsInput_1.CustomersUpdateWithoutCommentsInput)
], CustomersUpdateOneRequiredWithoutCommentsInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCommentsInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutCommentsInput);
exports.CustomersUpdateOneRequiredWithoutCommentsInput = CustomersUpdateOneRequiredWithoutCommentsInput;

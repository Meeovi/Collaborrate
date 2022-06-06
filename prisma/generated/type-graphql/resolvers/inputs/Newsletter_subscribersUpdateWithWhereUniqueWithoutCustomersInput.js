"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersUpdateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateWithoutCustomersInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../inputs/Newsletter_subscribersWhereUniqueInput");
let Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput = class Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateWithoutCustomersInput_1.Newsletter_subscribersUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateWithoutCustomersInput_1.Newsletter_subscribersUpdateWithoutCustomersInput)
], Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput);
exports.Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput = Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput;

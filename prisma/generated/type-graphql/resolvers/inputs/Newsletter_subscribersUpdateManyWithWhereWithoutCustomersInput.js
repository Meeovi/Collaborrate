"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersScalarWhereInput_1 = require("../inputs/Newsletter_subscribersScalarWhereInput");
const Newsletter_subscribersUpdateManyMutationInput_1 = require("../inputs/Newsletter_subscribersUpdateManyMutationInput");
let Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput = class Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersScalarWhereInput_1.Newsletter_subscribersScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersScalarWhereInput_1.Newsletter_subscribersScalarWhereInput)
], Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyMutationInput_1.Newsletter_subscribersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateManyMutationInput_1.Newsletter_subscribersUpdateManyMutationInput)
], Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput);
exports.Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput = Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput;

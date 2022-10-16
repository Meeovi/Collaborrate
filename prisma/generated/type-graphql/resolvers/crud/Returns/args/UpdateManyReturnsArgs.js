"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsUpdateManyMutationInput_1 = require("../../../inputs/ReturnsUpdateManyMutationInput");
const ReturnsWhereInput_1 = require("../../../inputs/ReturnsWhereInput");
let UpdateManyReturnsArgs = class UpdateManyReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyMutationInput_1.ReturnsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyMutationInput_1.ReturnsUpdateManyMutationInput)
], UpdateManyReturnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], UpdateManyReturnsArgs.prototype, "where", void 0);
UpdateManyReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReturnsArgs);
exports.UpdateManyReturnsArgs = UpdateManyReturnsArgs;

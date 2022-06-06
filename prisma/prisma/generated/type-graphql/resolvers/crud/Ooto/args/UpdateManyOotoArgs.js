"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoUpdateManyMutationInput_1 = require("../../../inputs/OotoUpdateManyMutationInput");
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
let UpdateManyOotoArgs = class UpdateManyOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoUpdateManyMutationInput_1.OotoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoUpdateManyMutationInput_1.OotoUpdateManyMutationInput)
], UpdateManyOotoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], UpdateManyOotoArgs.prototype, "where", void 0);
UpdateManyOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOotoArgs);
exports.UpdateManyOotoArgs = UpdateManyOotoArgs;

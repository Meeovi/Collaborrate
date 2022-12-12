"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenUpdateManyMutationInput_1 = require("../../../inputs/ApitokenUpdateManyMutationInput");
const ApitokenWhereInput_1 = require("../../../inputs/ApitokenWhereInput");
let UpdateManyApitokenArgs = class UpdateManyApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenUpdateManyMutationInput_1.ApitokenUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenUpdateManyMutationInput_1.ApitokenUpdateManyMutationInput)
], UpdateManyApitokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereInput_1.ApitokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereInput_1.ApitokenWhereInput)
], UpdateManyApitokenArgs.prototype, "where", void 0);
UpdateManyApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyApitokenArgs);
exports.UpdateManyApitokenArgs = UpdateManyApitokenArgs;

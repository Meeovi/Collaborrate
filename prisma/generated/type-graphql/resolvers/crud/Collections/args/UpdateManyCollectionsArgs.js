"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsUpdateManyMutationInput_1 = require("../../../inputs/CollectionsUpdateManyMutationInput");
const CollectionsWhereInput_1 = require("../../../inputs/CollectionsWhereInput");
let UpdateManyCollectionsArgs = class UpdateManyCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsUpdateManyMutationInput_1.CollectionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsUpdateManyMutationInput_1.CollectionsUpdateManyMutationInput)
], UpdateManyCollectionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereInput_1.CollectionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsWhereInput_1.CollectionsWhereInput)
], UpdateManyCollectionsArgs.prototype, "where", void 0);
UpdateManyCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCollectionsArgs);
exports.UpdateManyCollectionsArgs = UpdateManyCollectionsArgs;

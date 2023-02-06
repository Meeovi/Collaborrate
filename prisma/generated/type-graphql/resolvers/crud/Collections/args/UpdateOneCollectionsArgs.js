"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsUpdateInput_1 = require("../../../inputs/CollectionsUpdateInput");
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let UpdateOneCollectionsArgs = class UpdateOneCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsUpdateInput_1.CollectionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsUpdateInput_1.CollectionsUpdateInput)
], UpdateOneCollectionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], UpdateOneCollectionsArgs.prototype, "where", void 0);
UpdateOneCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCollectionsArgs);
exports.UpdateOneCollectionsArgs = UpdateOneCollectionsArgs;

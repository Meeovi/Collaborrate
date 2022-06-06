"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsUpdateInput_1 = require("../../../inputs/CollectionsUpdateInput");
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let UpdateCollectionsArgs = class UpdateCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsUpdateInput_1.CollectionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsUpdateInput_1.CollectionsUpdateInput)
], UpdateCollectionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], UpdateCollectionsArgs.prototype, "where", void 0);
UpdateCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCollectionsArgs);
exports.UpdateCollectionsArgs = UpdateCollectionsArgs;

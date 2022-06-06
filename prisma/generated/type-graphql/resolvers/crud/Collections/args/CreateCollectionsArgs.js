"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsCreateInput_1 = require("../../../inputs/CollectionsCreateInput");
let CreateCollectionsArgs = class CreateCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsCreateInput_1.CollectionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsCreateInput_1.CollectionsCreateInput)
], CreateCollectionsArgs.prototype, "data", void 0);
CreateCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCollectionsArgs);
exports.CreateCollectionsArgs = CreateCollectionsArgs;

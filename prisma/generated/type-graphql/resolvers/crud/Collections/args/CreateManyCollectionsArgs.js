"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsCreateManyInput_1 = require("../../../inputs/CollectionsCreateManyInput");
let CreateManyCollectionsArgs = class CreateManyCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsCreateManyInput_1.CollectionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCollectionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCollectionsArgs.prototype, "skipDuplicates", void 0);
CreateManyCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCollectionsArgs);
exports.CreateManyCollectionsArgs = CreateManyCollectionsArgs;

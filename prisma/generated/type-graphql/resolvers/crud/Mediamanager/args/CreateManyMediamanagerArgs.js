"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerCreateManyInput_1 = require("../../../inputs/MediamanagerCreateManyInput");
let CreateManyMediamanagerArgs = class CreateManyMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerCreateManyInput_1.MediamanagerCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMediamanagerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMediamanagerArgs.prototype, "skipDuplicates", void 0);
CreateManyMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMediamanagerArgs);
exports.CreateManyMediamanagerArgs = CreateManyMediamanagerArgs;

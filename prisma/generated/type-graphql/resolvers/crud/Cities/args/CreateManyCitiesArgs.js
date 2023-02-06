"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesCreateManyInput_1 = require("../../../inputs/CitiesCreateManyInput");
let CreateManyCitiesArgs = class CreateManyCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesCreateManyInput_1.CitiesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCitiesArgs.prototype, "skipDuplicates", void 0);
CreateManyCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCitiesArgs);
exports.CreateManyCitiesArgs = CreateManyCitiesArgs;

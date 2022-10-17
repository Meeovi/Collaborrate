"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesWhereInput_1 = require("../../../inputs/CitiesWhereInput");
let DeleteManyCitiesArgs = class DeleteManyCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereInput_1.CitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereInput_1.CitiesWhereInput)
], DeleteManyCitiesArgs.prototype, "where", void 0);
DeleteManyCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCitiesArgs);
exports.DeleteManyCitiesArgs = DeleteManyCitiesArgs;

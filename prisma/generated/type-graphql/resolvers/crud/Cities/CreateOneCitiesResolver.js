"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCitiesArgs_1 = require("./args/CreateOneCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let CreateOneCitiesResolver = class CreateOneCitiesResolver {
    async createOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCitiesArgs_1.CreateOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCitiesResolver.prototype, "createOneCities", null);
CreateOneCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], CreateOneCitiesResolver);
exports.CreateOneCitiesResolver = CreateOneCitiesResolver;
